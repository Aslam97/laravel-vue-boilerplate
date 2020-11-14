@php $config = [ 'app_name' => config('app.name'),'locale' => $locale =
app()->getLocale(), 'locales' => config('app.locales'), ]; @endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Laravel Vue Boilerplate" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>Lavuject</title>

    <script>
      window.__init__ = @json($config);
    </script>
  </head>
  <body>
    <div id="app"></div>

    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
