<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <form method="POST" action="{{ route('register') }}">
        {{ csrf_field() }}

        <input type="text" name="name" 
        value="{{ old('name') }}" required autofocus>

        <input type="email" name="email" 
        value="{{ old('email') }}" required>

        <input type="password" 
        name="password" required>

        <input type="password" 
        name="password_confirmation" required>

        <button type="submit" class="btn btn-primary">
            Register
        </button>
    </form>
</body>
</html>


