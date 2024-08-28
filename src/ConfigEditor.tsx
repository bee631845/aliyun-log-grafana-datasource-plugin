import React, { ChangeEvent, PureComponent } from 'react';
import { InlineField, Input, SecretInput } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { HeaderWithValue, SLSDataSourceOptions, SLSSecureJsonData } from './types';
import { ConfigSection, DataSourceDescription } from '@grafana/experimental';
import { CustomHeaders } from './custom-header/custom-headers';

interface Props extends DataSourcePluginOptionsEditorProps<SLSDataSourceOptions> {}

interface State {}

export class SLSConfigEditor extends PureComponent<Props, State> {
  onEndpointChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    options.url = event.target.value;
    onOptionsChange({ ...options });
  };

  onProjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      project: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onLogStoreChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      logstore: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onRoleArnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      roleArn: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  // Secure field (only sent to the backend)
  onAKIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    var accessKeySecret = '';
    if (options.secureJsonData !== undefined) {
      if (options.secureJsonData.hasOwnProperty('accessKeySecret')) {
        // @ts-ignore
        accessKeySecret = options.secureJsonData['accessKeySecret'];
      }
    }
    onOptionsChange({
      ...options,
      secureJsonData: {
        accessKeyId: event.target.value,
        accessKeySecret: accessKeySecret,
      },
    });
  };

  onAKSecretChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    var accessKeyId = '';
    if (options.secureJsonData !== undefined) {
      if (options.secureJsonData.hasOwnProperty('accessKeyId')) {
        // @ts-ignore
        accessKeyId = options.secureJsonData['accessKeyId'];
      }
    }
    onOptionsChange({
      ...options,
      secureJsonData: {
        accessKeyId: accessKeyId,
        accessKeySecret: event.target.value,
      },
    });
  };

  onResetAKID = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        accessKeyId: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        accessKeyId: '',
      },
    });
  };
  onResetAKSecret = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        accessKeySecret: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        accessKeySecret: '',
      },
    });
  };

  onHeadersChange = (headers: HeaderWithValue[]) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      headers,
    };
    onOptionsChange({ ...options, jsonData });
  };

  render() {
    const { options } = this.props;
    const { jsonData, secureJsonFields, url } = options;
    const secureJsonData = (options.secureJsonData || {}) as SLSSecureJsonData;

    return (
      <>
        <DataSourceDescription
          docsLink="https://help.aliyun.com/zh/sls/developer-reference/connect-log-service-to-grafana"
          dataSourceName="SLS数据源"
        />
        <hr style={{ margin: '20px 0' }} />
        <ConfigSection title="Connection" description="连接设置">
          {/* EndPonit */}
          <InlineField
            htmlFor="connection-url"
            label={'Endpoint'}
            labelWidth={24}
            tooltip={
              <>
                Specify a complete Endpoint URL
                <br />
                (for example: cn-hangzhou.log.aliyuncs.com)
              </>
            }
            grow
            required
            interactive
          >
            <Input
              id="connection-url"
              aria-label="Project 所在的地域"
              onChange={this.onEndpointChange}
              value={url || ''}
              placeholder={'请输入 Endpoint'}
            />
          </InlineField>

          {/*  Project */}
          <InlineField
            htmlFor="connection-project"
            label={'Project'}
            tooltip={'Project'}
            labelWidth={24}
            grow
            required
            interactive
          >
            <Input
              id="connection-url"
              aria-label="Project"
              onChange={this.onProjectChange}
              value={jsonData.project || ''}
              placeholder={'请输入 Project'}
            />
          </InlineField>

          {/* AccessKeyID */}
          <InlineField
            htmlFor="connection-AccessKeyID"
            label={'AccessKeyID'}
            labelWidth={24}
            tooltip={'阿里云账号AccessKeyID'}
            grow
            required
            interactive
          >
            <SecretInput
              isConfigured={(secureJsonFields && secureJsonFields.accessKeyId) as boolean}
              value={secureJsonData.accessKeyId || ''}
              label="AccessKeyID"
              placeholder={'阿里云账号AccessKeyID'}
              onReset={this.onResetAKID}
              onChange={this.onAKIDChange}
            />
          </InlineField>

          {/* AccessKeySecret */}
          <InlineField
            htmlFor="connection-AccessKeySecret"
            label={'AccessKeySecret'}
            labelWidth={24}
            tooltip={'阿里云账号AccessKeySecret'}
            grow
            required
            interactive
          >
            <SecretInput
              isConfigured={(secureJsonFields && secureJsonFields.accessKeySecret) as boolean}
              value={secureJsonData.accessKeySecret || ''}
              label="AccessKeySecret"
              placeholder={'阿里云账号AccessKeySecret'}
              onReset={this.onResetAKSecret}
              onChange={this.onAKSecretChange}
            />
          </InlineField>
        </ConfigSection>

        {/* Other  */}
        <hr style={{ margin: '20px 0' }} />
        <ConfigSection title="Other">
          {/* roleArn */}
          <InlineField
            style={{ marginTop: '8px' }}
            htmlFor="connection-roleArn"
            label={'roleArn'}
            labelWidth={24}
            grow
            interactive
          >
            <Input
              id="other-roleArn-url"
              aria-label="roleArn"
              onChange={this.onRoleArnChange}
              value={jsonData.roleArn || ''}
              placeholder={'配置STS跳转(选填, optional)'}
            />
          </InlineField>

          {/* headers */}
          <CustomHeaders headers={jsonData.headers || []} onChange={this.onHeadersChange} readOnly={false} />
        </ConfigSection>
      </>
    );
  }
}
