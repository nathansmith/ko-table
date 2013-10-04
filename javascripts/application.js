// JSLint settings:
/*global
  CAST_JSON,
  console,
  jQuery,
  ko
*/

var APP = (function($, window, document, undefined) {
  $(document).ready(function() {
    APP.go();
  });

  // "Private constant" vars.
  var body;
  var on = 'on';
  var dot_on = '.' + on;

  // Fake data
  var json_data;

  // Safely log things, if need be
  function log() {
    if (console && typeof console.log === 'function') {
      for (var i = 0, ii = arguments.length; i < ii; i++) {
        console.log(arguments[i]);
      }
    }
  }

  // Extend KO array, to make it sortable
  ko.observableArray.fn.sort_by = function(key, reverse) {
    var self = this;

    self.sort(function(a, b) {
      var a_key = String(a[key]);
      var b_key = String(b[key]);
      var n, val;

      if (reverse) {
        n = a_key - b_key;
        val = !isNaN(n) ? n : b_key.localeCompare(a_key);
      }
      else {
        n = b_key - a_key;
        val = !isNaN(n) ? n : a_key.localeCompare(b_key);
      }

      return val;
    });
  };

  return {
    // APP.go
    go: function() {
      var i, j = APP.init;

      for (i in j) {
        // Run everything in APP.init
        j.hasOwnProperty(i) && j[i]();
      }
    },
    // APP.init
    init: {
      // APP.init.assign_dom_vars
      assign_dom_vars: function() {
        body = $(document.body);
      },
      // APP.init.stop_dead_links
      stop_dead_links: function(ev) {
        var event = 'click.stop_dead_links';
        var str = 'a[href="#"]';

        body.off(event).on(event, str, function(ev) {
          // Stop that link!
          ev.preventDefault();
        });
      },
      // APP.init.render_table
      render_table: function(json) {
        var model = new APP.models.cast_view_model();
        ko.applyBindings(model);
        APP.util.table_head();
      },
      // APP.init.sort_by
      sort_by: function(key) {
        var event = 'click.sort_by';
        var str = '.table-data th[data-key] a';

        body.off(event).on(event, str, function(ev) {
          var el = $(this);
          var th = el.closest('th');
          var th_other = th.siblings('th');
          var key = th.attr('data-key');
          var sort = th.attr('data-sort');
          var asc = 'ascending';
          var desc = 'descending';
          var dir = asc;

          if (!sort || sort === asc) {
            dir = desc;
          }

          var reverse = dir !== asc;

          th.addClass(on).attr('data-sort', dir);
          th_other.removeClass(on).removeAttr('data-sort');
          json_data.sort_by(key, reverse);
        });
      },
      // APP.window_resize
      window_resize: function() {
        var event = 'resize.window_resize';
        var timer;

        function do_it() {
          window.clearTimeout(timer);
          APP.util.table_head();
        }

        $(window).off(event).on(event, function() {
          timer = window.setTimeout(do_it, 16);
        });
      },
    },
    // APP.models
    models: {
      // APP.models.cast_view_model
      cast_view_model: function() {
        var self = this;

        // The CAST_JSON variable comes from "/json/cast.js"
        json_data = ko.observableArray(CAST_JSON);
        self.cast = json_data;
      }
    },
    util: {
      table_head: function(reset_sort) {
        var table = $('#main-table');
        var width = table.outerWidth();
        var scroll = $('#main-scroll');

        if (!table.length || !scroll.length) {
          return;
        }

        var clone, thead, div;
        var c = $('#table-data-clone');
        var th_list = [];

        if (c.length) {
          clone = c;
        }
        else {
          thead = table.find('thead').clone();
          clone = $('<table id="table-data-clone" class="table-data" />');
          clone.append(thead);
        }

        table.find('thead th .cell').each(function() {
          var el = $(this);
          var width = el.css('width');
          th_list.push(width);
        });

        clone.find('thead th .cell').each(function(i) {
          var el = $(this);

          el.css({
            width: th_list[i]
          });
        });

        // Remove sorted column indicator
        if (reset_sort) {
          clone.find(dot_on).removeClass(on);
        }

        div = $('.table-data-pinned');

        // If this exists already, exit
        if (!div.length) {
          div = $('<div class="table-data-pinned"></div>');
          div.append(clone).insertBefore(scroll);
        }

        div.css({
          width: width
        });
      }
    }
  };

// Parameters: Zepto/jQuery, window, document.
})(jQuery, this, this.document);