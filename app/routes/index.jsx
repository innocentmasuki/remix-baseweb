import { StyledLink } from "baseui/link";
import { Button, SIZE, SHAPE } from "baseui/button";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

export default function Index() {
  return (
    <div
      style={{
        paddingTop: "10%",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        lineHeight: "1.4",
      }}
    >
      <h1>
        Demo of{" "}
        <StyledLink href="https://remix.run" animateUnderline>
          Remix
        </StyledLink>{" "}
        with{" "}
        <StyledLink href="https://baseweb.design" animateUnderline>
          Base Web
        </StyledLink>
      </h1>
      <p>This demo use Remix with Javascript</p>
      <br />

      <Button
        onClick={() => (window.location.href = "https://www.baseweb.design")}
        endEnhancer={<span>| Baseweb</span>}
        size={SIZE.large}
        shape={SHAPE.pill}
      >
        Get Started
      </Button>

      <p
        style={{
          position: "fixed",
          bottom: "10px",
          left: "30px",
        }}
      >
        <ThemeProvider
          theme={createTheme(lightThemePrimitives, {
            colors: {
              linkText: "#aaaaaa",
              linkVisited: "#aaaaaa",
            },
          })}
        >
          <StyledLink href="https://innocentmasuki.me" animateUnderline>
            Innocent Masuki
          </StyledLink>
        </ThemeProvider>
      </p>
    </div>
  );
}
