import React from 'react'

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string,
  href: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {

  console.log("Mi grupo de departamentos es -> ", departments);

  const departmentOptions = departments.map((department:Category)=>{
    return(
      <option
        value={department.slug} // Por que el slug? por que es el dato que se va a devolver al componente padre, para actualizar la  barra de busqueda
        id={String(department.id)}
        >
          {department.name}
      </option>
    )
  })

  const onHandleSetSlug = (event:any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  return (
    <select
      name=""
      id="department selection"
      defaultValue="value0"
      onChange={onHandleSetSlug}
      >
      <option disabled value="value0">Seleccione una opcion</option>
      {departmentOptions}

    </select>
  )
}

export default DepartmentGroup
