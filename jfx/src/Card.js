import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Wrap,
    WrapItem,
    Button,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  const ServiceBox = ({ title, description, image }) => (
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      // bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
    >
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={image}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text color={'green.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {title}
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={"black.600"}>
          {description}
        </Heading>
      </Stack>
    </Box>
  );
  
  
  const Services = () =>{
          const services = [
    {
      title: "Classic Restarunts",
      description: "The classic restaurant's menu showcases a selection of carefully crafted dishes that highlight the culinary traditions of the past.",
      image:"https://thumbs.dreamstime.com/z/cozy-restaurant-tables-ready-dinner-39875776.jpg?w=992",
    },
    {
      title: "Party hall",
      description: "The party hall features a spacious dance floor, designed to encourage guests to let loose and dance the night away.",
      image: "https://i.pinimg.com/originals/66/e2/73/66e273aa49f1d0568843c54cf1d51e3a.jpg",
  
    },
    {
      title: "Japanese Restarunts",
      description: "The sushi bar, often a centerpiece of the restaurant, displays an array of meticulously prepared sushi rolls and nigiri.",
      image: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/48byXia/videoblocks-signs-for-fast-food-restaurants-in-las-vegas-4k_hc606sm0m_thumbnail-1080_01.png",
  
    },
    {
      title: "Aquraium Restaurant",
      description: "The restaurant's interior decor complements the aquatic theme, featuring subtle blue hues, wave-inspired patterns. ",
      image: "https://res.allmacwallpaper.com/get/iMac-21-inch-wallpapers/Underwater-Restaurant-at-1920x1080/18874-9.jpg",
  
    },
    {
      title: "Yaffa Cafe",
      description: "Located in the heart of the Greenwich Village neighborhood, Yaffa Cafe is a bustling and eclectic eatery that has become a beloved institution. ",
      image: "https://images3.alphacoders.com/245/245545.jpg",
  
    },
  
  ];
    return (
      <div>
        <Heading fontSize={{ base: "2x1", sm: "4x1" }}
          fontWeight={"bold"}
          color={"eer.900"}
        >
         <Heading><center><strong>Restarunts</strong></center></Heading>
        </Heading>
        <Center py={12}>
          <Wrap spacing={12} justify="center">
            <WrapItem>
            <Button>Reservation</Button>
              <ServiceBox
                title={services[0].title}
                description={services[0].description}
                image={services[0].image}
                
                />
            </WrapItem>
            <WrapItem>
              <Link to='/Reserve'>
                <Button>Reservation</Button>
                </Link>
              <ServiceBox
                title={services[1].title}
                description={services[1].description}
                image={services[1].image}
              />
            </WrapItem>
          </Wrap>
          <Wrap spacing={12} justify="center" mt={7}>
            <WrapItem>
            <Link to='/Reserve'>
            <Button>Reservation</Button>
            </Link>
              <ServiceBox
                title={services[2].title}
                description={services[2].description}
                image={services[2].image}
              />
            </WrapItem>
            <WrapItem>
            <Link to='/Reserve'>
            <Button>Reservation</Button>
            </Link>
              <ServiceBox
                title={services[3].title}
                description={services[3].description}
                image={services[3].image}
              />
            </WrapItem>
            <WrapItem>
            <Link to='/Reserve'>
            <Button>Reservation</Button>
            </Link>
              <ServiceBox
                title={services[4].title}
                description={services[4].description}
                image={services[4].image}
              />
            </WrapItem>
          </Wrap>
        </Center>
      </div>
  
    );
    };
    export default Services;