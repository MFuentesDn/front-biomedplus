import './repuestos.css';
function Repuestos() {
    return (

        <div class="container">
            Modulo repuestos
            <div class="container-button">
                <button type="button" class="btn btn-info">Agregar repuestos</button>
                <button type="button" class="btn btn-info">Editar repuestos</button>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Item</th>
                        <th scope="col">Referencia</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Repuestos;