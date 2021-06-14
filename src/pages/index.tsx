import Head from "next/head";
import Image from "next/image";

import Safe from "ui/components/feedback/Safe/Safe";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

export default function Home() {
  return (
    <div>
      <Safe />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
    </div>
  );
}
