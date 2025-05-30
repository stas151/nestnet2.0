<?php
$email = $_POST['email'] ?? '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo filter_var($email, FILTER_VALIDATE_EMAIL) ? "OK" : "Неверный email";
}
?>
<form method="post">
  Email: <input name="email">
  <input type="submit">
</form>