<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Sblog</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    
    
    <div id="app">
        <navbar @auth :logged="true" @endauth></navbar>
        <section class="section">
            <div class="container">
                @yield('content')
            </div>
        </section>
    </div>

    <!-- Scripts -->
    
    @yield('scripts')

</body>
</html>
