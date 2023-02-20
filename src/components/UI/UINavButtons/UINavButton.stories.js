import UINavButton from './UINavButton';

export default {
    title: 'UI-Kit/UIButton',
    component: UINavButton
}

const Template = (args) => <UINavButton {...args} />;

const props = {
    text: 'Button', 
    onClick: () => console.log('work'), 
    disabled: false, 
    theme: 'dark-nav__btn'
}

export const Light = Template.bind({});
Light.args = {
   ...props,
   theme: 'light-nav__btn'
};

export const Dark = Template.bind({});
Dark.args = {
    ...props,
    theme: 'dark-nav__btn'
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    disabled: true
 };