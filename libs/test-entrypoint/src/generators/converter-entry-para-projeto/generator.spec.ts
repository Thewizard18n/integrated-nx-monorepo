import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { converterEntryParaProjetoGenerator } from './generator';
import { ConverterEntryParaProjetoGeneratorSchema } from './schema';

describe('converter-entry-para-projeto generator', () => {
  let tree: Tree;
  const options: ConverterEntryParaProjetoGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await converterEntryParaProjetoGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
