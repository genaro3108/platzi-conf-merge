import React, { useContext } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import AppContext from '../context/AppContext';
import '../assets/styles/components/Detalle.css';

const Detalle = () => {
    const { state } = useContext(AppContext);
    const { detalleSeguimiento } = state;

    const initialDataState = {
        skip: 0,
        take: 10,
      };
    const [page, setPage] = React.useState(initialDataState);
    const pageChange = (event) => {
        setPage(event.page);
     };
    return (
            
        <Grid           
            data={detalleSeguimiento.slice(page.skip, page.take + page.skip)}
            className='tablaDetalle'
            skip={page.skip}
            take={page.take}
            total={detalleSeguimiento.length}
            pageable={true}
            onPageChange={pageChange}
        >
            <Column field="telefono" title="Telefono" width="100px" />
            <Column field="nombre" title="Nombre" width="150px" />
            <Column field="correo" title="Correo" width="150px" />
            <Column field="agencia" title="Agencia" width="100px" />
            <Column field="salesJourney" title="Sales Journey" width="350px"  />
            <Column field="ultimoFlujo" title="Último flujo" width="120px"  />
            <Column field="ultimoRecord" title="Último record" width="120px" />
            <Column field="archivos" title="Indentificaciones en Bucket" width="350px"/>
        </Grid>
    );
}

export default Detalle;