export class RegistroPacienteDTO {
  constructor(
    public tipoDocumento: string = '',
    public nroDocumento: string = '',
    public telefono: string = '',
    public nombres: string = '',
    public apellidos: string = '',
    public direccion: string = '',
    public nacionalidad: string = '',
    public fechaNacimiento: string = '',
    public departamento: string = '',
    public ciudad: string = '',
    public celular: string = '',
    public regimen: string = '',
    public planComplementario = '',
    public email: string = '',
    public password: string = '',
    public confirmaPassword: string = ''
  ){}
}
