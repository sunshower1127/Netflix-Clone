import { ButtonSlider } from "@/components/button-slider";
import NetflixLogo from "@/components/netflix-logo";

export default function MainPage() {
  return (
    <>
      <header>
        <nav>
          <NetflixLogo />
        </nav>
      </header>
      <main className="flex flex-col">
        <title>MainPage</title>
        {/* 
      <h6 className="text-sm font-light mb-1">내가 찜한 리스트</h6>
      <Slider.Container>
        {Array.from({ length: 10 }).map((_, index) => (
          <Slider.Item key={index} index={index} />
        ))}
      </Slider.Container> */}

        <ButtonSlider.Container headerText="김선우 님이 시청중인 콘텐츠">
          {Array.from({ length: 30 }).map((_, index) => (
            <ButtonSlider.Item key={index} index={index} />
          ))}
        </ButtonSlider.Container>
      </main>
    </>
  );
}
