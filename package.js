// XXX BBP update metadata
Package.describe({
  name: 'configurable-bootstrap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
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
    'mixins',
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
    'wells.less']);
});
