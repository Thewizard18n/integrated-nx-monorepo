import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { criarUmEntrypointGenerator } from './generator';
import { CriarUmEntrypointGeneratorSchema } from './schema';

describe('criar-um-entrypoint generator', () => {
  let tree: Tree;
  const options: CriarUmEntrypointGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await criarUmEntrypointGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
