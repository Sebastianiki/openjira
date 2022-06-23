import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { DragEvent, FC, useContext } from 'react';
import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui/UIContext';

interface Props {
  entry: Entry;
}

export const EntryCard:FC<Props> = ({entry}) => {

  const { setIsDragging } = useContext(UIContext)
  const { description } = entry

  const onDragStart = (event:DragEvent) => {
    setIsDragging(true)
    event.dataTransfer.setData('id', entry._id)
  }

  const onDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <Card 
      sx={{ marginBottom: 1}}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography 
            sx={{ whiteSpace: 'pre-line'}}
          >
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions 
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
