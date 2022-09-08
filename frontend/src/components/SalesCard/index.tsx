import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control-input" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control-input" type="text" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-992">ID</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th className="show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show-992">#199</td>
                            <td className="show-576">06/09/2022</td>
                            <td>Anakin</td>
                            <td className="show-992">10</td>
                            <td className="show-992">13</td>
                            <td>R$55300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">#200</td>
                            <td className="show-576">06/09/2022</td>
                            <td>Leia</td>
                            <td className="show-992">11</td>
                            <td className="show-992">7</td>
                            <td>R$10300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">#201</td>
                            <td className="show-576">06/09/2022</td>
                            <td>Leia</td>
                            <td className="show-992">9</td>
                            <td className="show-992">5</td>
                            <td>R$40300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard