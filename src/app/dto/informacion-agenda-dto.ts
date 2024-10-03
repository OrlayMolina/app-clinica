import { InformacionCitaDTO } from './informacion-cita-dto';

export class InformacionAgendaDTO {

    constructor(
        public id: string = '',
        public especialidad: string = '',
        public duracion: string = '',
        public informacionCitaDTO: InformacionCitaDTO[] = [],
    ){}
}
