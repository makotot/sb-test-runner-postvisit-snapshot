import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  setup() {
  },
  async preVisit() {
  },
  async postVisit(page, context) {
    if (context.hasFailure) {
      const screenshotPath = `./screenshots/${context.title.replace(/\s+/g, '_')}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved to: ${screenshotPath}`);
    }
  },
};

export default config;