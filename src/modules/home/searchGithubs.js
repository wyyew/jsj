import React, { Component, PropTypes } from 'react';
import { Form, Select, Input, Button } from 'antd';

const FormItem = Form.Item;
console.log(FormItem)

class SearchGithubs extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    const val = form.getFieldValue('username');
    form.setFieldsValue({username:''})
    const path = `/profile/${val}`
    this.context.router.push( path )
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
        {getFieldDecorator('username', {
          rules: [{required:true, message:"please input username!"}]
        })(
          <Input />
        )}
        </FormItem>
        <FormItem>
        <Button type="primary" htmlType="submit">搜索</Button>
        </FormItem>
      </Form>
    )
  }
}
  SearchGithubs.contextTypes = {
    router: PropTypes.object
  }
const WrappedApp = Form.create()(SearchGithubs);
export default WrappedApp
