export class CrearCitaDTO {

  constructor(
    public idMedico: string = '',
    public idPaciente: string = '',
    public idSede: string = '',
    public fechaCita: string = '',
    public especialidad: string = '',
    public duracion: string = '',
    public consultorio: string = '',
    public comentarios: string = '',
    public usuarioCreacion: string = '',
    public fechaCreacion: string = '',
  ){}
}
