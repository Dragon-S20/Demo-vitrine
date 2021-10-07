import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import img1 from './img/info1-vitrine.jpg'
import img2 from './img/info2-vitrine.jpg'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item sx={{ width: '100%', height: 450 }} text-align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Lorem sed risus ultricies tristique. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Dui vivamus arcu felis bibendum ut tristique et. Ornare aenean euismod elementum nisi quis eleifend quam. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Mauris ultrices eros in cursus turpis. Pharetra sit amet aliquam id diam maecenas. Ullamcorper velit sed ullamcorper morbi. Nunc scelerisque viverra mauris in. Erat nam at lectus urna duis convallis convallis tellus id. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tempor nec feugiat nisl pretium fusce id velit ut. Eros in cursus turpis massa tincidunt dui ut. In dictum non consectetur a erat nam at lectus urna.

Laoreet non curabitur gravida arcu ac. At lectus urna duis convallis convallis tellus. Pretium aenean pharetra magna ac placerat. Sed felis eget velit aliquet sagittis. Eget nunc lobortis mattis aliquam faucibus purus in massa. Proin libero nunc consequat interdum varius sit amet mattis. Bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque habitant morbi tristique senectus et netus. Quis lectus nulla at volutpat diam ut venenatis tellus. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Posuere ac ut consequat semper viverra nam libero. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Leo vel fringilla est ullamcorper eget nulla facilisi. Risus nullam eget felis eget nunc. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Tempus quam pellentesque nec nam aliquam sem. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. At augue eget arcu dictum varius. Semper risus in hendrerit gravida rutrum quisque.

Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate sapien nec sagittis aliquam. Turpis nunc eget lorem dolor. Iaculis at erat pellentesque adipiscing commodo. Turpis massa sed elementum tempus egestas sed sed. Ultricies mi quis hendrerit dolor magna eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet facilisis magna etiam tempor orci eu lobortis. Aliquet porttitor lacus luctus accumsan. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Accumsan tortor posuere ac ut consequat semper viverra.

Blandit aliquam etiam erat velit.</Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img src={img1} alt= {'model'} style={{ width: '100%' }}/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img src={img2} alt= {'model'} style={{ width: '100%' }}/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Lorem sed risus ultricies tristique. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Dui vivamus arcu felis bibendum ut tristique et. Ornare aenean euismod elementum nisi quis eleifend quam. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Mauris ultrices eros in cursus turpis. Pharetra sit amet aliquam id diam maecenas. Ullamcorper velit sed ullamcorper morbi. Nunc scelerisque viverra mauris in. Erat nam at lectus urna duis convallis convallis tellus id. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tempor nec feugiat nisl pretium fusce id velit ut. Eros in cursus turpis massa tincidunt dui ut. In dictum non consectetur a erat nam at lectus urna.

Laoreet non curabitur gravida arcu ac. At lectus urna duis convallis convallis tellus. Pretium aenean pharetra magna ac placerat. Sed felis eget velit aliquet sagittis. Eget nunc lobortis mattis aliquam faucibus purus in massa. Proin libero nunc consequat interdum varius sit amet mattis. Bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque habitant morbi tristique senectus et netus. Quis lectus nulla at volutpat diam ut venenatis tellus. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Posuere ac ut consequat semper viverra nam libero. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Leo vel fringilla est ullamcorper eget nulla facilisi. Risus nullam eget felis eget nunc. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Tempus quam pellentesque nec nam aliquam sem. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. At augue eget arcu dictum varius. Semper risus in hendrerit gravida rutrum quisque.

Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate sapien nec sagittis aliquam. Turpis nunc eget lorem dolor. Iaculis at erat pellentesque adipiscing commodo. Turpis massa sed elementum tempus egestas sed sed. Ultricies mi quis hendrerit dolor magna eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet facilisis magna etiam tempor orci eu lobortis. Aliquet porttitor lacus luctus accumsan. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Accumsan tortor posuere ac ut consequat semper viverra.

Blandit aliquam etiam erat velit. Pharetra sit amet aliquam id. Leo vel orci porta non pulvinar neque laoreet. Mi eget mauris pharetra et ultrices. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Egestas egestas fringilla phasellus faucibus scelerisque. At elementum eu facilisis sed odio. Auctor elit sed vulputate mi sit amet mauris. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ut placerat orci nulla pellentesque dignissim. Morbi tristique senectus et netus. Aliquet nec ullamcorper sit amet risus nullam. Sit amet consectetur adipiscing elit ut aliquam. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Mauris nunc congue nisi vitae suscipit tellus. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Laoreet suspendisse interdum consectetur libero id faucibus. Dictumst vestibulum rhoncus est pellentesque elit.

Interdum varius sit amet mattis. Pulvinar elementum integer enim neque volutpat. Nulla aliquet enim tortor at auctor urna. Senectus et netus et malesuada fames ac turpis egestas. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas dui id ornare arcu odio ut sem. Ornare massa eget egestas purus. Urna neque viverra justo nec ultrices dui sapien eget mi. Pretium viverra suspendisse potenti nullam ac. Gravida quis blandit turpis cursus in hac habitasse.</Item>
        </Grid>
      </Grid>
    </Box>
  );
}