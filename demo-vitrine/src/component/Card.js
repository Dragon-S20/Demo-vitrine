import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card1 = (
  <>
    <CardContent>
    <Typography variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center', p:8}}>
        Comment est née notre entreprise
      </Typography>
      <Typography sx={{ fontSize: 14, px:24}} color="text.secondary" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Lorem sed risus ultricies tristique. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Dui vivamus arcu felis bibendum ut tristique et. Ornare aenean euismod elementum nisi quis eleifend quam. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Mauris ultrices eros in cursus turpis. Pharetra sit amet aliquam id diam maecenas. Ullamcorper velit sed ullamcorper morbi. Nunc scelerisque viverra mauris in. Erat nam at lectus urna duis convallis convallis tellus id. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tempor nec feugiat nisl pretium fusce id velit ut. Eros in cursus turpis massa tincidunt dui ut. In dictum non consectetur a erat nam at lectus urna. Laoreet non curabitur gravida arcu ac. At lectus urna duis convallis convallis tellus. Pretium aenean pharetra magna ac placerat. Sed felis eget velit aliquet sagittis. Eget nunc lobortis mattis aliquam faucibus purus in massa. Proin libero nunc consequat interdum varius sit amet mattis. Bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque habitant morbi tristique senectus et netus. Quis lectus nulla at volutpat diam ut venenatis tellus. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Posuere ac ut consequat semper viverra nam libero. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Leo vel fringilla est ullamcorper eget nulla facilisi. Risus nullam eget felis eget nunc. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Tempus quam pellentesque nec nam aliquam sem. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. At augue eget arcu dictum varius. Semper risus in hendrerit gravida rutrum quisque. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate sapien nec sagittis aliquam. Turpis nunc eget lorem dolor. Iaculis at erat pellentesque adipiscing commodo. Turpis massa sed elementum tempus egestas sed sed. Ultricies mi quis hendrerit dolor magna eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet facilisis magna etiam tempor orci eu lobortis
      </Typography>
    </CardContent>
  </>
);


const ShowCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card1}</Card>
    </Box>
  );
}

export default ShowCard
