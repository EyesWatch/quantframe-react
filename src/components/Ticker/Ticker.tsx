import { Box, Group, Paper, Text } from "@mantine/core";
import classes from "./Ticker.module.css";

export type TickerProps = {
  data: { label: string }[];
  component?: any;
  keyName?: string;
  speed?: number;
  delay?: number;
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  tickerClassName?: string;
  itemClassName?: string;
  tickerTextClassName?: string;
  tickerStyle?: { [key: string]: any };
  itemStyle?: { [key: string]: any };
  loop?: boolean;
};

export function Ticker({ loop, speed, itemStyle, direction, delay, tickerClassName, data, tickerStyle }: TickerProps) {
  return (
    <Paper className={[classes.newsTicker, tickerClassName].join(" ")} style={tickerStyle}>
      <Box
        className={classes.tickerContent}
        style={{
          animationDuration: `${data.length * (61 - (speed || 100))}s`,
          animationDelay: `${delay}s`,
          animationDirection: direction,
          animationIterationCount: loop ? "infinite" : 1,
        }}
      >
        {data.map((item, index) => {
          return (
            <Group key={index} className={classes.tickerItem} style={itemStyle}>
              <Text className={classes.tickerText}>{item.label}</Text>
            </Group>
          );
        })}
      </Box>
    </Paper>
  );
}
Ticker.defaultProps = {
  data: [],
  component: null,
  keyName: null,
  speed: 100,
  delay: 0,
  direction: "normal",
  tickerClassName: "",
  itemClassName: "",
  tickerTextClassName: "",
  tickerStyle: {},
  itemStyle: {},
  loop: true,
};
