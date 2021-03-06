// XXX BBP update metadata
Package.describe({
  name: 'glasser:configurable-bootstrap',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'configurable bootstrap package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('less@2.5.0_1');
  api.addFiles([
    'alerts.less',
    'badges.less',
    'bootstrap.less',
    'breadcrumbs.less',
    'button-groups.less',
    'buttons.less',
    'carousel.less',
    'close.less',
    'code.less',
    'component-animations.less',
    'dropdowns.less',
    'forms.less',
    'glyphicons.less',
    'grid.less',
    'input-groups.less',
    'jumbotron.less',
    'labels.less',
    'list-group.less',
    'media.less',
    'mixins.less',
    'modals.less',
    'navbar.less',
    'navs.less',
    'normalize.less',
    'pager.less',
    'pagination.less',
    'panels.less',
    'popovers.less',
    'print.less',
    'progress-bars.less',
    'responsive-embed.less',
    'responsive-utilities.less',
    'scaffolding.less',
    'tables.less',
    'theme.less',
    'thumbnails.less',
    'tooltip.less',
    'type.less',
    'utilities.less',
    'variables.less',
    'wells.less'
  ]);
  api.addFiles([
    'mixins/alerts.less',
    'mixins/background-variant.less',
    'mixins/border-radius.less',
    'mixins/buttons.less',
    'mixins/center-block.less',
    'mixins/clearfix.less',
    'mixins/forms.less',
    'mixins/gradients.less',
    'mixins/grid-framework.less',
    'mixins/grid.less',
    'mixins/hide-text.less',
    'mixins/image.less',
    'mixins/labels.less',
    'mixins/list-group.less',
    'mixins/nav-divider.less',
    'mixins/nav-vertical-align.less',
    'mixins/opacity.less',
    'mixins/pagination.less',
    'mixins/panels.less',
    'mixins/progress-bar.less',
    'mixins/reset-filter.less',
    'mixins/resize.less',
    'mixins/responsive-visibility.less',
    'mixins/size.less',
    'mixins/tab-focus.less',
    'mixins/table-row.less',
    'mixins/text-emphasis.less',
    'mixins/text-overflow.less',
    'mixins/vendor-prefixes.less'
  ]);

  // Static assets.
  api.addFiles([
    'fonts/glyphicons-halflings-regular.eot',
    'fonts/glyphicons-halflings-regular.woff',
    'fonts/glyphicons-halflings-regular.svg',
    'fonts/glyphicons-halflings-regular.woff2',
    'fonts/glyphicons-halflings-regular.ttf'
  ]);

  api.addFiles(['meteor.less']);
});
