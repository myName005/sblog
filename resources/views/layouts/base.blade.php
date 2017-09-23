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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    
    
    <div id="app">
        <navbar>
            <template slot="navbar-start">
                <a class="navbar-item " href="/list_article">Articles</a>
                <a class="navbar-item " href="/list_catigory">Catigories</a>
                @can('make','App\Article')
                    <navbar-dropdown>
                        <template slot="triger">
                            <i class="fa fa-plus"></i> Add
                        </template>
                        
                        <a href="/make_article" 
                        class="navbar-item">Write Article</a>
                        @can('make','App\Catigory')
                            <a href="/make_catigory" 
                                class="navbar-item">New Catigory</a>
                        @endcan
                    </navbar-dropdown>
                @endcan
            </template>
            <template slot="navbar-end">
                @auth
                    <a href="/logout" class="navbar-item">Logout</a>
                @else
                    <a href="/login" class="navbar-item">Login</a>
                    <a href="/register" class="navbar-item">Register</a>
                @endauth
            </template>
        </navbar>
        @yield('base_content')
    </div>

    <!-- Scripts -->
    
    <script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
