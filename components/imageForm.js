import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '../styles/Form.module.scss';

export default function ImageForm() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const validationChech = (value) => {
    return value == Math.floor(value) && value > 0;
  };

  const cropImage = () => {
    console.log(x, y, width, height);
  };

  const onReset = () => {
    setX('');
    setY('');
    setWidth('');
    setHeight('');
  };

  return (
    <div className={styles.formWrapper}>
      <form autoComplete="off" name="ImageForm">
        <div className={classNames(styles.field, styles.flexedFields)}>
          <div className={styles.control}>
            <label htmlFor="x">
              <p>X coordinates</p>
            </label>
            <input
              placeholder={'Please, write number of pixels'}
              type="text"
              id={'x'}
              name="x"
              value={x}
              className={classNames(
                x && !validationChech(x) && styles.isDanger
              )}
              onChange={(e) => setX(e.target.value)}
            />
            {x && !validationChech(x) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
          <div className={styles.control}>
            <label htmlFor="y">
              <p>Y coordinates</p>
            </label>
            <input
              placeholder={'Please, write number of pixels'}
              type="text"
              id={'y'}
              name="y"
              value={y}
              className={classNames(
                y && !validationChech(y) && styles.isDanger
              )}
              onChange={(e) => setY(e.target.value)}
            />
            {y && !validationChech(y) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
        </div>
        <div className={classNames(styles.field, styles.flexedFields)}>
          <div className={styles.control}>
            <label htmlFor="width">
              <p>Width</p>
            </label>
            <input
              placeholder={'Please, write number of pixels'}
              type="text"
              id={'width'}
              name="width"
              value={width}
              className={classNames(
                width && !validationChech(width) && styles.isDanger
              )}
              onChange={(e) => setWidth(e.target.value)}
            />
            {width && !validationChech(width) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
          <div className={styles.control}>
            <label htmlFor="height">
              <p>Height</p>
            </label>
            <input
              placeholder={'Please, write number of pixels'}
              type="text"
              id={'height'}
              name="height"
              value={height}
              className={classNames(
                height && !validationChech(height) && styles.isDanger
              )}
              onChange={(e) => setHeight(e.target.value)}
            />
            {height && !validationChech(height) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
        </div>
        <div className={classNames(styles.field, styles.flexedActions)}>
          <div className={classNames(styles.control, styles.chooseFile)}>
            <label htmlFor={'image-photo'}>
              <p className={styles.imageLoader}>Choose your image</p>
            </label>
            <input
              accept=".png,.jpg,.jpeg"
              type="file"
              id={'image-photo'}
              name="image-photo"
              // onChange={(e) => uploadFilePreview(e, fileObj.id, 'id')}
            />
          </div>
          <div className={classNames(styles.field, styles.flexedFields)}>
            <div className={styles.control}>
              <button
                disabled={!height && !width && !x && !y}
                onClick={onReset}
                type="button"
                className={styles.resetButton}
              >
                Reset
              </button>
            </div>
            <div className={styles.control}>
              <button
                disabled={
                  !validationChech(height) ||
                  !validationChech(width) ||
                  !validationChech(x) ||
                  !validationChech(y)
                }
                onClick={cropImage}
                type="button"
                className={styles.submitButton}
              >
                Crop
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
