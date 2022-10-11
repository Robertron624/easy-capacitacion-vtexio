import React, {PropsWithChildren} from 'react'
import { BulletSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector'
import {useListContext, ListContextProvider} from 'vtex.list-context'

import{getBulletsAsTSXList} from './modules/BulletsAsList'

export interface BulletGroupProps {
  bullets: BulletSchema;
}


const BulletGroup = ({
  bullets,
  children
} : PropsWithChildren<BulletGroupProps>) => {

  const {isMobile} = useDevice()

  const {list} = useListContext() || []

  console.log('Bullets -> ', bullets);

  const bulletsGroup = getBulletsAsTSXList(bullets)

  const newListContextValue = list.concat(bulletsGroup)

  if(false){
    console.log(children, list)
  }

    return(
        <ListContextProvider list={newListContextValue}>
            {isMobile ?
              <div>{bulletsGroup}</div>
              :
              children
          }
        </ListContextProvider>
    )
}

export default BulletGroup
