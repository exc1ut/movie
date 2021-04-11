import {Grid, Select} from '@material-ui/core'
import Filters from '../components/Filters/Filters'
import react from 'react'
interface Props{}



export const FilterPage: React.FC<Props> = () => {
    return  (
        <div>
          <Filters/>
        </div>
    )
}