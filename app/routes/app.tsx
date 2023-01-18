//add or remove tailwindcss
import React from 'react';

import {Outlet} from '@remix-run/react';

import {Container, VStack} from '@chakra-ui/react';

export default function App() {
	// const {user} = useLoaderData<LoaderData>()

	return (
		<>
			<VStack
				justifyContent="center"
				w="100vw"
				h="100vh"
				spacing="8">
				{/*<Box*/}
				{/*  height="200px"*/}
				{/*  width="100%"*/}
				{/*  position="absolute"*/}
				{/*  top="50%"*/}
				{/*  left="0%"*/}
				{/*  bg="rgba(255,0,0,0.1)"*/}
				{/*  zIndex={-1}*/}
				{/*  transform="translateY(-34%)"*/}
				{/*  _before={{*/}
				{/*    content: '""',*/}
				{/*    bgImage: "url({testlogo})",*/}
				{/*    bgSize: "cover",*/}
				{/*    pos: "absolute",*/}
				{/*    top: 0,*/}
				{/*    right: 0,*/}
				{/*    left: 0,*/}
				{/*    bottom: 0,*/}
				{/*    opacity: 0.2*/}
				{/*  }}*/}
				{/*></Box>*/}

				<Container>
					<Outlet />
				</Container>
			</VStack>
		</>
	);
}
