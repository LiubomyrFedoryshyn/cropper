import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '../styles/Form.module.scss';

export default function ImageForm() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const validationCheck = (value) => {
    return value ? value == Math.floor(value) && value > 0 : false;
  };

  const onReset = () => {
    setX('');
    setY('');
    setWidth('');
    setHeight('');
    setImageLoaded(false);
    document.getElementById('image-photo').value = '';
  };

  const uploadFilePreview = (e) => {
    if (e.target.files[0]) {
      setImageLoaded(true);
      let output = document.getElementById('hidden-image');
      output.src = URL.createObjectURL(e.target.files[0]);
    }
  };

  const onCrop = () => {
    const canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    let img = document.getElementById('hidden-image');
    ctx.drawImage(img, x, y, width, height);
    let image = canvas
      .toDataURL('image/png', 1.0)
      .replace('image/png', 'image/cropped-image');
    let link = document.createElement('a');
    link.download = 'cropped-image.png';
    link.href = image;
    link.click();
  };

  return (
    <div className={styles.formWrapper}>
      <canvas width={width} height={height} id="myCanvas"></canvas>
      <img id="hidden-image" src="#" alt="image-for-canvas" />
      <form autoComplete="off" name="ImageForm">
        <div className={classNames(styles.field, styles.flexedFields)}>
          <div className={styles.control}>
            <label htmlFor="x">
              <p>X coordinates</p>
            </label>
            <input
              placeholder={'Add number of pixels...'}
              type="text"
              id={'x'}
              name="x"
              value={x}
              className={classNames(
                x && !validationCheck(x) && styles.isDanger
              )}
              onChange={(e) => setX(e.target.value)}
            />
            {x && !validationCheck(x) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
          <div className={styles.control}>
            <label htmlFor="y">
              <p>Y coordinates</p>
            </label>
            <input
              placeholder={'Add number of pixels...'}
              type="text"
              id={'y'}
              name="y"
              value={y}
              className={classNames(
                y && !validationCheck(y) && styles.isDanger
              )}
              onChange={(e) => setY(e.target.value)}
            />
            {y && !validationCheck(y) && (
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
              placeholder={'Add number of pixels...'}
              type="text"
              id={'width'}
              name="width"
              value={width}
              className={classNames(
                width && !validationCheck(width) && styles.isDanger
              )}
              onChange={(e) => setWidth(e.target.value)}
            />
            {width && !validationCheck(width) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
          <div className={styles.control}>
            <label htmlFor="height">
              <p>Height</p>
            </label>
            <input
              placeholder={'Add number of pixels...'}
              type="text"
              id={'height'}
              name="height"
              value={height}
              className={classNames(
                height && !validationCheck(height) && styles.isDanger
              )}
              onChange={(e) => setHeight(e.target.value)}
            />
            {height && !validationCheck(height) && (
              <p className={styles.errorMessage}>Invalid format</p>
            )}
          </div>
        </div>
        <div className={classNames(styles.field, styles.flexedActions)}>
          <div
            className={classNames(
              styles.control,
              styles.chooseFile,
              imageLoaded && styles.loaded
            )}
          >
            <label htmlFor={'image-photo'}>
              <p className={styles.imageLoader}>Choose your image</p>
            </label>
            <input
              accept=".png,.jpg,.jpeg"
              type="file"
              id={'image-photo'}
              name="image-photo"
              onChange={uploadFilePreview}
            />
          </div>
          <div className={classNames(styles.field, styles.flexedFields)}>
            <div className={styles.control}>
              <button
                disabled={!height && !width && !x && !y && !imageLoaded}
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
                  !validationCheck(height) ||
                  !validationCheck(width) ||
                  !validationCheck(x) ||
                  !validationCheck(y) ||
                  !imageLoaded
                }
                onClick={onCrop}
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
