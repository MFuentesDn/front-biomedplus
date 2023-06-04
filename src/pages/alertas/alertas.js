import './alertas.css';
import Menu from '../../components/menu/menu';


function Alertas() {
  return (
    <div>

        <div class="container">
          <p><strong>Modulo Alertas</strong></p>
  
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="row">
                <div class="col-1 col-calendar1">
                  04 JUN
                </div>
                <div class="col col-content">
                  <div class="d-flex w-100 p-1 justify-content-between">
                    <h5 class="mb-1">Serie: 5826744</h5>
                  </div>
                  <p class="mb-1">Biomédico</p>
                  <small>Fallo en Bomba de dolor, puerta no cierra</small>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="row">
                <div class="col-1 col-calendar1">
                  05 JUN
                </div>
                <div class="col col-content">
                  <div class="d-flex w-100 p-1 justify-content-between">
                    <h5 class="mb-1">Serie: 1FSG34</h5>
                  </div>
                  <p class="mb-1">Biomédico</p>
                  <small>Fallo en Bomba de infusión, circuito no funciona</small>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="row">
                <div class="col-1 col-calendar1">
                  06 JUN
                </div>
                <div class="col col-content">
                  <div class="d-flex w-100 p-1 justify-content-between">
                    <h5 class="mb-1">Serie: HFÑH334</h5>
                  </div>
                  <p class="mb-1">Biomédico</p>
                  <small>Mantenimiento Monitor de signos vitales</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}
export default Alertas;