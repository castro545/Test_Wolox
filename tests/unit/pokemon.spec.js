import { shallowMount } from '@vue/test-utils';
import PokemonList from '../../src/components/Pokemon/PokemonList.vue';

describe('PokemonList', () => {
  it('Testing component PokemonList render div', async () => {
    const wrapper = shallowMount(PokemonList);
    await wrapper.vm.listData();
    const listItems = wrapper.findAll('div');
    expect(listItems).toHaveLength(1);
  });
});
