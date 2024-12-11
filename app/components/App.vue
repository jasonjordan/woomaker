`<template>
  <Frame>
    <Page>
      <ActionBar title="Woo" flat="true" />
      <TabView androidTabsPosition="bottom" selectedTabTextColor="#FF0000">
        <TabViewItem title="Settings">
          <ScrollView>
            <StackLayout class="p-4">
              <CategorySelection />
              <NotificationFrequency />
              <Label 
                text="You will receive random notifications throughout the day with new ideas to surprise your partner." 
                textWrap="true" 
                class="description" 
              />
            </StackLayout>
          </ScrollView>
        </TabViewItem>
      </TabView>
    </Page>
  </Frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategorySelection from './settings/CategorySelection.vue';
import NotificationFrequency from './settings/NotificationFrequency.vue';

export default defineComponent({
  components: {
    CategorySelection,
    NotificationFrequency
  }
});
</script>

<style lang="scss">
ActionBar {
  background-color: #FF0000;
  color: white;
}

.description {
  margin-top: 20;
  color: #666;
  font-size: 14;
  text-align: center;
}
</style>`