<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body>
        <a href="/login">login</a>
        <a href="/register">Register</a>
        @auth
        	you are logged in <a href="/logout">logout</a>
            {{dd(Auth::user()->toArray())}}
        @endauth


    </body>
</html>
