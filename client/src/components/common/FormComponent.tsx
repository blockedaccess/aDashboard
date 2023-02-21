import React from 'react'
import { Box, Typography, FormControl, FormHelperText,TextField,TextareaAutosize,Stack,Select,MenuItem,Button} from '@pankod/refine-mui'
import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'

const FormComponent = ({type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#fcfcfc'>
        {type} a Property
      </Typography>
    <Box
    mt={2.5}
    borderRadius='15px'
    padding="20px"
    bgcolor="#21201f"
    >
      <form style={{
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'}} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500,
              margin: '10px 0',
              fontSize: 16,
              color:'#fcfcfc'
            }}> Enter Property Name</FormHelperText>
            <TextField 
            fullWidth
            required
            id="outlined-basic"
            color= "info"
            variant= "outlined" 
            {...register('title', {
              required: true})}/>
          </FormControl>
          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500,
              margin: '10px 0',
              fontSize: 16,
              color:'#fcfcfc'
            }}> Property Description</FormHelperText>
            <TextareaAutosize
            minRows={5}
            required
            placeholder='Write Description'
            color="info"
            style={{
              width: '100%',
              background: 'transparent',
              fontSize : '16px',
              borderColor: '#fcfcfc',
              borderRadius: 6,
              padding: 10,
              color: '#fcfcfc'}}
              {...register('description', {
                required: true})}/>
          </FormControl>

                <Stack direction ="row" gap={4}>
                  <FormControl sx={{
                    flex : 1
                  }}>
                    <FormHelperText
                    sx={{                      
                      fontWeight: 500,
                      margin: '10px 0',
                      fontSize: 16,
                      color: '#fcfcfc'
                    }}>
                      Select Property Type
                    </FormHelperText>
                    <Select
                    variant= "outlined"
                    color= "info"
                    displayEmpty 
                    required
                    inputProps={{'aria-label' : 'Without label'}}
                    defaultValue= "apartment"
                    {...register('propertyType', {required: true})}>
                      <MenuItem
                      value="apartment">Apartment
                      </MenuItem>
                      <MenuItem
                      value="villa">Villa
                      </MenuItem>
                      <MenuItem
                      value="farmhouse">Farmhouse
                      </MenuItem>
                      <MenuItem
                      value="condos">Condos
                      </MenuItem>
                      <MenuItem
                      value="townhouse">Townhouse
                      </MenuItem>
                      <MenuItem
                      value="duplex">Duplex
                      </MenuItem>
                      <MenuItem
                      value="studio">Studio
                      </MenuItem>
                      <MenuItem
                      value="chalet">Chalet
                      </MenuItem>
    
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormHelperText sx={{
                      fontWeight: 500,
                      margin: '10px 0',
                      fontSize: 16,
                      color:'#fcfcfc'
                    }}> Enter Property Price</FormHelperText>
                    <TextField 
                    fullWidth
                    required
                    id="outlined-basic"
                    color= "info"
                    type="number"
                    variant= "outlined" 
                    {...register('price', {
                      required: true})}/>
                  </FormControl>
                </Stack>


                <FormControl>
                    <FormHelperText sx={{
                      fontWeight: 500,
                      margin: '10px 0',
                      fontSize: 16,
                      color:'#fcfcfc'
                    }}> Enter Location </FormHelperText>
                    <TextField 
                    fullWidth
                    required
                    id="outlined-basic"
                    color= "info"
                    variant= "outlined" 
                    {...register('location', {
                      required: true})}/>
                  </FormControl>

                  <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                    <Stack direction= "row" gap={2}>
                      <Typography color= "#fcfcfc" fontSize={16} fontWeight={500} my="10px"> Property Photo</Typography>
                      <Button component ="label" sx={{
                        width: 'fit-content',
                        color:'#2ed480',
                        textTransform: 'capitalize',
                        fontSize : 16
                      }}>
                        Upload
                        <input
                        hidden 
                        accept= "image/*"
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>,) => {
                          handleImageChange(e.target.files![0])
                        }}
                        />
                      </Button>
                    </Stack>
                    {propertyImage && (
                      <Typography fontSize={14} color="#fcfcfc" sx={{ wordBreak: "break-all" }}>
                       {propertyImage.name}
                      </Typography>
                    )}
                  </Stack>
                  
                  <CustomButton
                  type="submit"
                  title={formLoading ? 'Submitting...' : 'Submit'}
                  backgroundColor = "#475be8"
                  color="#fcfcfc"
                  />
        </form>
    </Box>
    </Box>
  )
}

export default FormComponent