<?php
$phone = $_POST['phone'] ?? '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo preg_match("/^\+?[0-9]{10,15}$/", $phone) ? "OK" : "Неверный номер";
}
?>
<form method="post">
  Телефон: <input name="phone">
  <input type="submit">
</form>