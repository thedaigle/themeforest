ace.define("ace/theme/solarized_light", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
t.isDark = !1, t.cssClass = "ace-solarized-light", t.cssText = ".ace-solarized-light .ace_gutter {background: #fbf1d3;color: #333}.ace-solarized-light .ace_print-margin {width: 1px;background: #e8e8e8}.ace-solarized-light .ace_scroller {background-color: #FDF6E3}.ace-solarized-light .ace_text-layer {color: #586E75}.ace-solarized-light .ace_cursor {border-left: 2px solid #000000}.ace-solarized-light .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid #000000}.ace-solarized-light .ace_marker-layer .ace_selection {background: #073642}.ace-solarized-light.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FDF6E3;border-radius: 2px}.ace-solarized-light .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-solarized-light .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(147, 161, 161, 0.50)}.ace-solarized-light .ace_marker-layer .ace_active-line {background: #EEE8D5}.ace-solarized-light .ace_gutter-active-line {background-color : #dcdcdc}.ace-solarized-light .ace_marker-layer .ace_selected-word {border: 1px solid #073642}.ace-solarized-light .ace_invisible {color: rgba(147, 161, 161, 0.50)}.ace-solarized-light .ace_keyword,.ace-solarized-light .ace_meta,.ace-solarized-light .ace_support.ace_class,.ace-solarized-light .ace_support.ace_type {color: #859900}.ace-solarized-light .ace_constant.ace_character,.ace-solarized-light .ace_constant.ace_other {color: #CB4B16}.ace-solarized-light .ace_constant.ace_language {color: #B58900}.ace-solarized-light .ace_constant.ace_numeric {color: #D33682}.ace-solarized-light .ace_fold {background-color: #268BD2;border-color: #586E75}.ace-solarized-light .ace_entity.ace_name.ace_function,.ace-solarized-light .ace_entity.ace_name.ace_tag,.ace-solarized-light .ace_support.ace_function,.ace-solarized-light .ace_variable,.ace-solarized-light .ace_variable.ace_language {color: #268BD2}.ace-solarized-light .ace_storage {color: #073642}.ace-solarized-light .ace_string {color: #2AA198}.ace-solarized-light .ace_string.ace_regexp {color: #D30102}.ace-solarized-light .ace_comment,.ace-solarized-light .ace_entity.ace_other.ace_attribute-name {color: #93A1A1}.ace-solarized-light .ace_markup.ace_underline {text-decoration: underline}.ace-solarized-light .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4++3xf4ZVq1b9BwAjxwbT1g3hiwAAAABJRU5ErkJggg==) right repeat-y}";
        var r = e("../lib/dom");
        r.importCssString(t.cssText, t.cssClass)
})
