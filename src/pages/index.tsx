import Safe from "ui/components/feedback/Safe/Safe";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation"

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

      <UserInformation name={'Akira Hanashiro'} picture={'https://github.com/hanashiro.png'} rating={3} description={'São Paulo'} />
    </div>
  );
}
