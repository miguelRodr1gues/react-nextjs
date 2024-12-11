"use client";
import React from "react";
import Card from '@/components/TecnologyCard/Card';
import tecnologias from '@/app/data/tecnologias.json';

export default function Tecnologias() {

return <>
    {tecnologias.map((tecnologia, index) => (
          <Card
            key={index}
            title={tecnologia.title}
            image={tecnologia.image}
            description={tecnologia.description}
            rating={tecnologia.rating}
          />
        ))}
  </>
}
