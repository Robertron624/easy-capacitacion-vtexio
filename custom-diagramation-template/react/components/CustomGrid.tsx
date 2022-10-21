import React, {ReactNode} from 'react'

import customGridSchema  from '../schemas/customGridSchema'
import CustomGridItemBig from './CustomGridItemBig'
import CustomGridItemSmall from './CustomGridItemSmall'
import styles from "./styles.css"


type Props = {
  gridType: number,
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({gridType = 2, children}: Props) => {
  const gridTypeClass = `grid__${gridType}`

  console.log("gridType -> ", gridType);
  console.log("gridTypeClass -> ", gridTypeClass)

  return (
    <div className={styles[gridTypeClass]}>
      <CustomGridItemBig
        element={children[0]}
      />
      <CustomGridItemSmall
        elementOne = {children[1]}
        elementTwo = {children[2]}
      />
      <CustomGridItemSmall
        elementOne = {children[3]}
        elementTwo = {children[4]}
      />
    </div>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid
