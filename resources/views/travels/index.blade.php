{{-- @extends('layouts.app')

@section('content')
    <h1>Viajes disponibles</h1>

    <table class="table">
        <thead>
            <tr>
                <th>Origen</th>
                <th>Destino</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Precio</th>
                <th>Asientos</th>
                <th>Creación</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($travels as $travel)
                <tr>
                    <td>{{ $travel->origin }}</td>
                    <td>{{ $travel->destination }}</td>
                    <td>{{ $travel->date }}</td>
                    <td>{{ $travel->hour }}</td>
                    <td>{{ $travel->price }}</td>
                    <td>{{ $travel->seats }}</td>
                    <td>{{ $travel->created_at }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection --}}