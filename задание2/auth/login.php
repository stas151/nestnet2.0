<?php
$login = $_POST['login'] ?? '';
$pass = $_POST['pass'] ?? '';
if ($login === "admin" && $pass === "1234") echo "Добро пожаловать!";
else echo "Неверный логин или пароль";
?>
<form method="post">
  Логин: <input name="login"><br>
  Пароль: <input name="pass" type="password"><br>
  <input type="submit" value="Войти">
</form>