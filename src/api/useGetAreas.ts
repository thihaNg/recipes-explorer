import { useEffect, useState } from "react";
import { BASE_URL } from ".";
import axios from "axios";
import { Area, AreaResponse } from "../models/Area";

const URL = BASE_URL + 'list.php?a=list'

export const useGetAreas = () => {
  const [areas, setAreas] = useState<Area[]>([])

  useEffect(() => {
    axios.get<AreaResponse>(URL)
      .then(response => {
        setAreas(response.data.meals.map(area => ({
          name: area.strArea
        })))
      })
      .catch(err => {

      })
  }, [])

  return { areas }
}