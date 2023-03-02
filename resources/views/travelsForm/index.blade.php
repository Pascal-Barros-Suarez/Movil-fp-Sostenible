@extends('layouts.app')

@section('content')

<form method="POST" action="">
    @csrf
    <div class="form-group">
        <label for="origin">Origen:</label>
        <input type="text" class="form-control" name="destination" id="destination" required>
    </div>

    <div class="form-group">
        <label for="destination">Destino:</label>
        <input type="text" class="form-control" name="departure_date" id="departure_date" required>
    </div>

    <div class="form-group">
        <label for="date">Fecha:</label>
        <input type="date" class="form-control" name="date" id="date" required>
    </div>

    <div class="form-group">
        <label for="time">Hora:</label>
        <input type="time" class="form-control" name="time" id="time" required>
    </div>

    <div class="form-group">
        <label for="price">Precio:</label>
        <input type="number" class="form-control" name="price" id="price" required>
    </div>

    <div class="form-group">
        <label for="seats">Asientos:</label>
        <input type="number" class="form-control" name="seats" id="seats" required>
    </div>

    <div class="form-group">
        <label for="created">Creado:</label>
        <input type="date" class="form-control" name="created" id="created" required>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
@endsection