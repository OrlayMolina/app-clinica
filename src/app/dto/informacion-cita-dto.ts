export class InformacionCitaDTO {
    constructor(
        public id: string = '',
        public codigo: string = '',
        public paciente: string = '',
        public tipoDocumento: string = '',
        public nroDocumento: string = '',
        public celularPaciente: string = '',
        public sede: string = '',
        public confirmada: boolean = false,
        public echaCita: string = '',
        public horaCita: string = '',
        public especialidad: string = '',
        public duracion: string = '',
        public consultorio: string = '',
        public comentarios: string = '',
        public estado: string = '',
        public estadoRegistro: string = '',
        public usuarioCreacion: string = '',
        public fechaCreacion: string = '',
        public horaCreacion: string = '',
    ){}
}
