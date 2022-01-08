import React, { useEffect } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Button from "../components/button";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../store/duck/storesReducer";
function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.storesStore);
  useEffect(() => {
    dispatch(getStores());
  }, []);
  if (state.loading) {
    return (
      <Flex width={"full"} height={"full"} justifyContent={"center"}>
        <Spinner />
      </Flex>
    );
  }
  return (
    <Box>
      <Box w={"full"}>
        <Button>Add Store</Button>
      </Box>
      <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
        {state.allStores.map((store) => (
          <Card key={store.s_id} store={store} />
        ))}
      </Flex>
    </Box>
  );
}

export default Home;
