<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <form method="POST" action="{{ route('login') }}">
        {{ csrf_field() }}

        <input type="email" name="email" value="{{ old('email') }}" required autofocus>

        <input type="password" name="password" required>

        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                       
        <button type="submit" class="btn btn-primary">
            Login
        </button>
    </form>
</body>
</html>