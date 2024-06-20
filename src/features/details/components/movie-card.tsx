import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/Card";
import { CustomText } from "@/shared/text-custom";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Film } from "../types/movies";

interface props {
  movieInfo: Film;
}

const MovieCard = React.memo(({ movieInfo }: props) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View className="flex w-72 gap-2 ml-3">
      <Card>
        <CardHeader>
          <CardTitle>{movieInfo.title}</CardTitle>
          <CardDescription>Episode {movieInfo.episode_id}</CardDescription>
        </CardHeader>
        <CardContent>
          <TouchableOpacity onPress={toggleShowFullText}>
            <CustomText className="text-base">
              {showFullText
                ? movieInfo.opening_crawl
                : `${movieInfo.opening_crawl.substring(0, 100)} (show more...)`}
            </CustomText>
          </TouchableOpacity>
        </CardContent>
        <CardFooter>
          <CustomText className="text-sm font-bold text-yellow-200">
            Director: {movieInfo.director}
          </CustomText>
        </CardFooter>
      </Card>
    </View>
  );
});
export default MovieCard;
